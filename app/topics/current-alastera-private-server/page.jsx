import CurrentAlasteraPrivateServerKeywordPage, { generateMetadata } from './current-alastera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAlasteraPrivateServerKeywordPage />;
}
