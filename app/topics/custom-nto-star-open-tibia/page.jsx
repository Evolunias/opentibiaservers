import CustomNtoStarOpenTibiaKeywordPage, { generateMetadata } from './custom-nto-star-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNtoStarOpenTibiaKeywordPage />;
}
