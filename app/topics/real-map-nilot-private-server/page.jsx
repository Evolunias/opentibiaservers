import RealMapNilotPrivateServerKeywordPage, { generateMetadata } from './real-map-nilot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNilotPrivateServerKeywordPage />;
}
