import NoResetCoxaotTibiaKeywordPage, { generateMetadata } from './no-reset-coxaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCoxaotTibiaKeywordPage />;
}
