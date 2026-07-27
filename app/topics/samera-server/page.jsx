import SameraServerKeywordPage, { generateMetadata } from './samera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SameraServerKeywordPage />;
}
