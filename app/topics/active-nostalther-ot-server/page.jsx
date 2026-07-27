import ActiveNostaltherOtServerKeywordPage, { generateMetadata } from './active-nostalther-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNostaltherOtServerKeywordPage />;
}
