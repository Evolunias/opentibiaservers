import ActiveElderaOpenTibiaKeywordPage, { generateMetadata } from './active-eldera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveElderaOpenTibiaKeywordPage />;
}
