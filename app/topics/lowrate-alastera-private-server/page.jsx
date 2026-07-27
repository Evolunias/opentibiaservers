import LowrateAlasteraPrivateServerKeywordPage, { generateMetadata } from './lowrate-alastera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAlasteraPrivateServerKeywordPage />;
}
