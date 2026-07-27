import HighrateSerenityOtServerKeywordPage, { generateMetadata } from './highrate-serenity-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSerenityOtServerKeywordPage />;
}
