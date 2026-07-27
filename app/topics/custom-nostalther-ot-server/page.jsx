import CustomNostaltherOtServerKeywordPage, { generateMetadata } from './custom-nostalther-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNostaltherOtServerKeywordPage />;
}
