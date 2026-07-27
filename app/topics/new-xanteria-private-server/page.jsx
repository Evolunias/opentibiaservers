import NewXanteriaPrivateServerKeywordPage, { generateMetadata } from './new-xanteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewXanteriaPrivateServerKeywordPage />;
}
