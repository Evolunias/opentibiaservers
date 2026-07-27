import CustomRealestaOpenTibiaKeywordPage, { generateMetadata } from './custom-realesta-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealestaOpenTibiaKeywordPage />;
}
