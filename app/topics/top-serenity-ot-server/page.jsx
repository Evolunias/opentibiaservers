import TopSerenityOtServerKeywordPage, { generateMetadata } from './top-serenity-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSerenityOtServerKeywordPage />;
}
