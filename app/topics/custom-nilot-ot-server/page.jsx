import CustomNilotOtServerKeywordPage, { generateMetadata } from './custom-nilot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNilotOtServerKeywordPage />;
}
