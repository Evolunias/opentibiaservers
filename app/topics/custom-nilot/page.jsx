import CustomNilotKeywordPage, { generateMetadata } from './custom-nilot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNilotKeywordPage />;
}
