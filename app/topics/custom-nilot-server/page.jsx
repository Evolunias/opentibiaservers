import CustomNilotServerKeywordPage, { generateMetadata } from './custom-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNilotServerKeywordPage />;
}
