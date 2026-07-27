import JameraServerKeywordPage, { generateMetadata } from './jamera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JameraServerKeywordPage />;
}
