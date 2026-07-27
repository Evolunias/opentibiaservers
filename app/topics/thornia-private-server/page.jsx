import ThorniaPrivateServerKeywordPage, { generateMetadata } from './thornia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaPrivateServerKeywordPage />;
}
