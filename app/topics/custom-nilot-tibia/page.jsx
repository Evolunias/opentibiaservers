import CustomNilotTibiaKeywordPage, { generateMetadata } from './custom-nilot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNilotTibiaKeywordPage />;
}
