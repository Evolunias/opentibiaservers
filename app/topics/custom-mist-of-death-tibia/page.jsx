import CustomMistOfDeathTibiaKeywordPage, { generateMetadata } from './custom-mist-of-death-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMistOfDeathTibiaKeywordPage />;
}
