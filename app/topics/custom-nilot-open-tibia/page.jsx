import CustomNilotOpenTibiaKeywordPage, { generateMetadata } from './custom-nilot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNilotOpenTibiaKeywordPage />;
}
