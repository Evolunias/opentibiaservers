import ServerCommunityPanel from '@/app/components/ServerCommunityPanel';

export default function ServerSlugLayout({ children, params }) {
  const slug = String(params?.slug || '').toLowerCase();

  return (
    <>
      {children}
      {slug ? <ServerCommunityPanel slug={slug} /> : null}
    </>
  );
}
