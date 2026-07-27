import RealMapNilotKeywordPage, { generateMetadata } from './real-map-nilot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNilotKeywordPage />;
}
