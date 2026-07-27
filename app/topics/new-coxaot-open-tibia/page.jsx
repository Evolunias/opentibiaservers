import NewCoxaotOpenTibiaKeywordPage, { generateMetadata } from './new-coxaot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCoxaotOpenTibiaKeywordPage />;
}
