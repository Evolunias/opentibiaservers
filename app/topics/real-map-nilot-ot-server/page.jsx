import RealMapNilotOtServerKeywordPage, { generateMetadata } from './real-map-nilot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNilotOtServerKeywordPage />;
}
