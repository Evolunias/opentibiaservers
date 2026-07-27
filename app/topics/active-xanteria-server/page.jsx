import ActiveXanteriaServerKeywordPage, { generateMetadata } from './active-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveXanteriaServerKeywordPage />;
}
