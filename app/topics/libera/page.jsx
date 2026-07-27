import LiberaKeywordPage, { generateMetadata } from './libera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LiberaKeywordPage />;
}
