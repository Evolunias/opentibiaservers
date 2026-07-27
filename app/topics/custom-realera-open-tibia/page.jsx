import CustomRealeraOpenTibiaKeywordPage, { generateMetadata } from './custom-realera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealeraOpenTibiaKeywordPage />;
}
