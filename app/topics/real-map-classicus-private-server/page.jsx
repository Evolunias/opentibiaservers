import RealMapClassicusPrivateServerKeywordPage, { generateMetadata } from './real-map-classicus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClassicusPrivateServerKeywordPage />;
}
