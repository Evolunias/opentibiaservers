import CustomMistOfDeathKeywordPage, { generateMetadata } from './custom-mist-of-death';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMistOfDeathKeywordPage />;
}
