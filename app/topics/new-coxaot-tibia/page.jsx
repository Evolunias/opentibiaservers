import NewCoxaotTibiaKeywordPage, { generateMetadata } from './new-coxaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCoxaotTibiaKeywordPage />;
}
