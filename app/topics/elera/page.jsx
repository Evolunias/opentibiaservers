import EleraKeywordPage, { generateMetadata } from './elera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EleraKeywordPage />;
}
