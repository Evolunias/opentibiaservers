import NostaltherLaunchKeywordPage, { generateMetadata } from './nostalther-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherLaunchKeywordPage />;
}
