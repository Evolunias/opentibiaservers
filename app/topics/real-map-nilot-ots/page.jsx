import RealMapNilotOtsKeywordPage, { generateMetadata } from './real-map-nilot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNilotOtsKeywordPage />;
}
