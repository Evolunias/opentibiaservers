import RealMapNilotLoginKeywordPage, { generateMetadata } from './real-map-nilot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNilotLoginKeywordPage />;
}
