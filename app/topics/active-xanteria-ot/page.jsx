import ActiveXanteriaOtKeywordPage, { generateMetadata } from './active-xanteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveXanteriaOtKeywordPage />;
}
