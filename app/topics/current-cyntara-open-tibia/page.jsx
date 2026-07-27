import CurrentCyntaraOpenTibiaKeywordPage, { generateMetadata } from './current-cyntara-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCyntaraOpenTibiaKeywordPage />;
}
