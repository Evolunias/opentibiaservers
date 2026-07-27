import CustomClassickDrakoriaOpenTibiaKeywordPage, { generateMetadata } from './custom-classick-drakoria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassickDrakoriaOpenTibiaKeywordPage />;
}
