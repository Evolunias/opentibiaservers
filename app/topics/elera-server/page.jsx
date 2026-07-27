import EleraServerKeywordPage, { generateMetadata } from './elera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EleraServerKeywordPage />;
}
