import CustomNilotClientKeywordPage, { generateMetadata } from './custom-nilot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNilotClientKeywordPage />;
}
