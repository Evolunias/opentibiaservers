import PopularSerenityOtServerKeywordPage, { generateMetadata } from './popular-serenity-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSerenityOtServerKeywordPage />;
}
