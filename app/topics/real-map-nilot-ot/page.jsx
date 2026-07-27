import RealMapNilotOtKeywordPage, { generateMetadata } from './real-map-nilot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNilotOtKeywordPage />;
}
