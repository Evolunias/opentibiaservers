import NoResetAmeriaOpenTibiaKeywordPage, { generateMetadata } from './no-reset-ameria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAmeriaOpenTibiaKeywordPage />;
}
