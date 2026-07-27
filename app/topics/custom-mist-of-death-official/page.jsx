import CustomMistOfDeathOfficialKeywordPage, { generateMetadata } from './custom-mist-of-death-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMistOfDeathOfficialKeywordPage />;
}
