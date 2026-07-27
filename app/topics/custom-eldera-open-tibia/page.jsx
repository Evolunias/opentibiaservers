import CustomElderaOpenTibiaKeywordPage, { generateMetadata } from './custom-eldera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomElderaOpenTibiaKeywordPage />;
}
