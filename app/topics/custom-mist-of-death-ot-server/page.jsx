import CustomMistOfDeathOtServerKeywordPage, { generateMetadata } from './custom-mist-of-death-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMistOfDeathOtServerKeywordPage />;
}
