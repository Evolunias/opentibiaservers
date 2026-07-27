import SerenityOtKeywordPage, { generateMetadata } from './serenity-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityOtKeywordPage />;
}
