import ActiveXanteriaLoginKeywordPage, { generateMetadata } from './active-xanteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveXanteriaLoginKeywordPage />;
}
