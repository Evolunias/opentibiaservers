import CurrentElderaOpenTibiaKeywordPage, { generateMetadata } from './current-eldera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentElderaOpenTibiaKeywordPage />;
}
