import CurrentAmeriaOpenTibiaKeywordPage, { generateMetadata } from './current-ameria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAmeriaOpenTibiaKeywordPage />;
}
