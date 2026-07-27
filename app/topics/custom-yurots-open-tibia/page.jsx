import CustomYurotsOpenTibiaKeywordPage, { generateMetadata } from './custom-yurots-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomYurotsOpenTibiaKeywordPage />;
}
