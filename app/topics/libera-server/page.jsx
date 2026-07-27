import LiberaServerKeywordPage, { generateMetadata } from './libera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LiberaServerKeywordPage />;
}
