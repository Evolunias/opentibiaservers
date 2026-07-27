import CustomSerenityOtKeywordPage, { generateMetadata } from './custom-serenity-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSerenityOtKeywordPage />;
}
