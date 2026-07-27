import CurrentCoxaotOpenTibiaKeywordPage, { generateMetadata } from './current-coxaot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCoxaotOpenTibiaKeywordPage />;
}
